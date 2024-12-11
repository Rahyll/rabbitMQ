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

      var queue = "hello";

      channel.assertQueue(queue, {
        durable: false,
      });

      console.log(
        " [*] Waiting for messages in %s. To exit press CTRL+C",
        queue
      );

      channel.consume(
        queue,
        function (msg) {
          console.log(" [x] Received %s", msg.content.toString());
        },
        {
          noAck: true,
        }
      );
    });
  }
);
