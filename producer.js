#!/usr/bin/env node
import amqp from "amqplib/callback_api.js";

amqp.connect(
  "amqps://ekmslenq:1heKte75IT8sSTfxbTMS-B4g3l-lMk9L@hummingbird.rmq.cloudamqp.com/ekmslenq",
  function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = "worker";
      var msg = "Hello World!";

      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from("msg1"));
      channel.sendToQueue(queue, Buffer.from("msg2"));
      channel.sendToQueue(queue, Buffer.from("msg3"));
      channel.sendToQueue(queue, Buffer.from("msg4"));
      channel.sendToQueue(queue, Buffer.from("msg5"));
      channel.sendToQueue(queue, Buffer.from("msg6"));

      console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);
