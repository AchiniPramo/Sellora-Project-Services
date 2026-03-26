module.exports = {
  apps : [
    {
      name : "cloud-sql-auth-proxy",
      script : "./cloud-sql-proxy eca-bucket:asia-southeast1:mysql-vm eca-bucket:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-auth-proxy.log",
    },
    {
      name   : "user-service",
      script : "java",
      args   : "-Xmx128m -jar user-service/target/User-Service-1.0.0.jar",
      instances: 2,
      exec_mode: "fork"
    },
    {
      name   : "item-service",
      script : "java",
      args   : "-Xmx128m -jar item-service/target/Item-Service-1.0.0.jar",
      instances: 2,
      exec_mode: "fork"
    },
    {
      name   : "order-service",
      script : "java",
      args   : "-Xmx128m -jar order-service/target/Order-Service-1.0.0.jar",
      instances: 2,
      exec_mode: "fork"
    }
  ]
}