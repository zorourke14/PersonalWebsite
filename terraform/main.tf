# Create a Virtual Cloud Network 
resource "oci_core_vcn" "portfolio_vcn" {
  compartment_id = var.compartment_id
  cidr_block     = "10.0.0.0/16"
  display_name   = "portfolio-vcn"
  dns_label      = "portfolio"
  
  # Tags help organize resources
  freeform_tags = {
    "Project" = "Portfolio"
    "Environment" = "Development"
  }
}

# Create Internet Gateway 
resource "oci_core_internet_gateway" "portfolio_igw" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.portfolio_vcn.id
  display_name   = "portfolio-igw"
  enabled        = true
}

# Create a public subnet (where load balancer will live)
resource "oci_core_subnet" "public_subnet" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.portfolio_vcn.id
  cidr_block     = "10.0.1.0/24"
  display_name   = "public-subnet"
  dns_label      = "public"
  
  # This subnet can access the internet
  route_table_id = oci_core_route_table.public_rt.id
  security_list_ids = [oci_core_security_list.public_security_list.id]
  prohibit_public_ip_on_vnic = false
}

# Route table 
resource "oci_core_route_table" "public_rt" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.portfolio_vcn.id
  display_name   = "public-rt"
  
  # Route all internet traffic through the gateway
  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id = oci_core_internet_gateway.portfolio_igw.id
  }
}

# Security list 
resource "oci_core_security_list" "public_security_list" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.portfolio_vcn.id
  display_name   = "public-security-list"

  egress_security_rules {
    destination = "0.0.0.0/0"
    protocol    = "all"
  }

  # SSH
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      max = 22
      min = 22
    }
  }

  # HTTP
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      max = 80
      min = 80
    }
  }

  # HTTPS
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      max = 443
      min = 443
    }
  }
}

resource "oci_core_instance" "portfolio_instance" {
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[1].name  
  
  compartment_id      = var.compartment_id
  shape               = "VM.Standard.A1.Flex"
  display_name        = "portfolio-instance"

  shape_config {
    ocpus         = 1
    memory_in_gbs = 6
  }

  create_vnic_details {
    subnet_id        = oci_core_subnet.public_subnet.id
    assign_public_ip = true
    display_name     = "portfolio-vnic"
  }

  source_details {
    source_type = "image"
    source_id   = data.oci_core_images.oracle_linux.images[0].id
  }

  metadata = {
    ssh_authorized_keys = var.ssh_public_key
  }
}

# Data source to fetch the latest Oracle Linux image
data "oci_core_images" "oracle_linux" {
  compartment_id = var.compartment_id
  operating_system = "Oracle Linux"
  operating_system_version = "8"
  shape = "VM.Standard.A1.Flex"
}