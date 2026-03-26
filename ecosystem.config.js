module.exports = {
  apps : [
    {
      name   : "user-service",
      script : "java -jar user-service/target/User-Service-1.0.0.jar",
      log_file: "./logs/user-service.log",
      instances: 1,
    },
    {
      name   : "item-service",
      script : "java -jar item-service/target/Item-Service-1.0.0.jar",
      log_file: "./logs/item-service.log",
      instances: 1,
    },
    {
      name   : "order-service",
      script : ".java -jar order-service/target/Order-Service-1.0.0.jar",
      log_file: "./logs/order-service.log",
      instances: 1,
    }
  ]
}
