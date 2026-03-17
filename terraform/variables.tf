variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "eastus"
}

variable "resource_group_name" {
  description = "Azure resource group name"
  type        = string
  default     = "devops-rg"
}

variable "cluster_name" {
  description = "AKS cluster name"
  type        = string
  default     = "devops-cluster"
}

variable "vnet_cidr" {
  description = "VNet address space"
  type        = string
  default     = "10.0.0.0/8"
}

variable "subnet_cidr" {
  description = "AKS subnet CIDR"
  type        = string
  default     = "10.240.0.0/16"
}

variable "node_vm_size" {
  description = "VM size for AKS worker nodes"
  type        = string
  default     = "Standard_D2s_v3"
}

variable "node_count" {
  description = "Number of worker nodes"
  type        = number
  default     = 2
}
