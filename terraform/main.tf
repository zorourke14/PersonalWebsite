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
  security_list_ids = [oci_core_security_list.public_sl.id]
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
resource "oci_core_security_list" "public_sl" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.portfolio_vcn.id
  display_name   = "public-sl"
  
  # Allow HTTP traffic in
  ingress_security_rules {
    protocol = "6"  # TCP
    source   = "0.0.0.0/0"
    
    tcp_options {
      min = 80
      max = 80
    }
  }
  
  # Allow HTTPS traffic in
  ingress_security_rules {
    protocol = "6"  # TCP
    source   = "0.0.0.0/0"
    
    tcp_options {
      min = 443
      max = 443
    }
  }
  
  # Allow all traffic out
  egress_security_rules {
    protocol    = "all"
    destination = "0.0.0.0/0"
  }
}