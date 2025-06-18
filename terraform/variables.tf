variable "compartment_id" {
  description = "Oracle Cloud compartment ID"
  type        = string
}

variable "region" {
  description = "Oracle Cloud region"
  type        = string
  default     = "us-ashburn-1"
}

variable "ssh_public_key" {
  description = "SSH public key for server access"
  type        = string
}

variable "availability_domain" {
  description = "Availability domain for resources"
  type        = string
  default     = ""
}