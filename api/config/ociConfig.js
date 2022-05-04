'use strict'

//Config for the OCI instance (MODIFY HERE)
const configurationFilePath = "~/.oci/config" //OCI config file
const configProfile = "DEFAULT" //profile name
const compartmentId = "ocid1.compartment.oc1..aaaaaaaa62uw7yuhlvdtx32qmy7zfy3jvhee36budcxgeuojkph422il4lva" //compartment ID
const publicKeySSH = "ssh-rsa MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUdnAK7PUy7XocuYrVd6kMljEEO5u+9oaEKy7mNAGOnn2W8fgJELJaxnx+pKjRv3OLqZTzjz6j9h3mnRaK6vfXxXHy0Fb5lDMeTvvwPmjlpxcACGVZLO4wnFX8JUgtYvdS18pJaYtOwINfUmYJ6DsUKbshT3UcQ7jRvOmazdVKdt+oA4Z11cLG2fxKCQngjHwhnRDzagmvOk8gEvMVBE2KNwnvFN4DLAelZRxLqpi6WaUFCtVe9R5dzWy/tyNwhsnVlFbI4Y20BAp0gxIS7ymz4PJJtw33RCuwgBsPdML3m2jbqXzMsiZV3wcU0eSl4vCeh5B3eOe+0X2nsxTCrpswIDAQAB" //public key of the user
const accessKey = "xxx"
const secretKey = "xxx"
const bucketName = "xxxx"
    //email configuration
const smtpUser = "ocid1.user.oc1..aaaaaaaat5tnvkpfm5dpnjnhta6gg2easzc2fo72lenk3zwru5774mg57ykq@ocid1.tenancy.oc1..aaaaaaaagwmwhlofsz3rx4d3glfaqxlim4ryintboyuashvnw32e3uqx4wia.et.com"
const smtpPasswd = "kzhkzo.F#:}:dX5L4Y}x"
const approvedSender = "no-reply@devops-test-oracle.com"
const smtpEndpoint = "smtp.email.eu-frankfurt-1.oci.oraclecloud.com"
    //max number of instances per user
const maxInstances = 5
    //End Config for the OCI instance

//Cloud init script
const scriptPath = "./api/scripts/cloud_init.sh"

//Exports
exports.configurationFilePath = configurationFilePath
exports.configProfile = configProfile
exports.compartmentId = compartmentId
exports.publicKeySSH = publicKeySSH
exports.scriptPath = scriptPath
exports.accessKey = accessKey
exports.secretKey = secretKey
exports.bucketName = bucketName
exports.smtpUser = smtpUser
exports.smtpPasswd = smtpPasswd
exports.approvedSender = approvedSender
exports.smtpEndpoint = smtpEndpoint
exports.maxInstances = maxInstances