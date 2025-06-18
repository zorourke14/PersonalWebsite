output "vcn_id" {
  description = "ID of the VCN"
  value       = oci_core_vcn.portfolio_vcn.id
}

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = oci_core_subnet.public_subnet.id
}

output "vcn_cidr" {
  description = "CIDR block of the VCN"
  value       = oci_core_vcn.portfolio_vcn.cidr_block
}