module.exports = {
  apps : [
    {
      name   : "user-service",
      script : "java",
      args   : "-Xmx128m -jar user-service/target/User-Service-1.0.0.jar",
      instances: 1,
      exec_mode: "fork"
    },
    {
      name   : "item-service",
      script : "java",
      args   : "-Xmx128m -jar item-service/target/Item-Service-1.0.0.jar",
      instances: 1,
      exec_mode: "fork"
    },
    {
      name   : "order-service",
      script : "java",
      args   : "-Xmx128m -jar order-service/target/Order-Service-1.0.0.jar",
      instances: 1,
      exec_mode: "fork"
    }
  ]
}