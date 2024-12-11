import amqp from "amqplib/callback_api.js";

amqp.connect(
  "amqps://ekmslenq:1heKte75IT8sSTfxbTMS-B4g3l-lMk9L@hummingbird.rmq.cloudamqp.com/ekmslenq",
  function (error0, connection) {
    if (error0) {
      throw error0;
    }
    const queue = "worker";
    connection.createChannel(
      function (error1, channel) {
        if (error1) {
          throw error1;
        }
        channel.assertQueue(queue, { durable: false });
        channel.consume(queue, function (msg) {
          console.log(" [x] Received %s", msg.content.toString());
          setTimeout(function () {
            console.log(" [x] Done");
            channel.ack(msg);
          }, 5 * 1000);
        });
      },
      { noAck: false }
    );
  }
);
