# terraform/provider.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    oci = {
      source  = "oracle/oci"
      version = "~> 5.0"
    }
  }
}

# Configure Oracle Cloud connection
provider "oci" {
  region = var.region
}

# Get availability domains
data "oci_identity_availability_domains" "ads" {
  compartment_id = var.compartment_id
}