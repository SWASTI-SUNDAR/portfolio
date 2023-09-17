import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0.1, opacity: 1 }}
      transition={{ delay: 0.5, duration: .5 }}
      className="min-h-screen text-center flex justify-center items-center flex-col gap-5 text-white font-roboto"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
      possimus laborum modi, et maiores sint aliquam quia iusto dolor autem
      molestiae recusandae esse error, voluptatem perspiciatis impedit
      reprehenderit sed quod accusantium cupiditate natus delectus aperiam rem?
      Adipisci, necessitatibus consequuntur ullam aliquam deserunt, id sapiente
      molestiae nisi nam blanditiis reprehenderit? Laboriosam, nihil iusto
      aspernatur nisi doloremque id at in ea reprehenderit esse voluptatum
      voluptas, accusantium, vel inventore placeat dolorum neque officiis
      dignissimos soluta corporis quidem eos tempora iste? Enim voluptate esse
      quibusdam? Aperiam laboriosam hic, ex suscipit harum molestiae id nam iure
      maxime, perspiciatis quisquam unde assumenda blanditiis cupiditate
      necessitatibus doloribus quos a molestias accusantium quas iusto? Aliquam,
      neque dignissimos maxime, accusamus a error ipsam earum nisi molestiae
      magnam cupiditate molestias optio excepturi eveniet praesentium aspernatur
      quos soluta iusto, at quisquam sunt laboriosam adipisci quibusdam ab.
      Maiores architecto rerum sunt deserunt? Modi, nisi molestias neque animi
      saepe quisquam exercitationem maxime perferendis nemo sed vitae ipsa ad
      magnam eius, dolore recusandae laudantium alias natus delectus eligendi
      ullam repellendus labore. Provident alias vitae rem harum corporis itaque
      voluptatem nihil nesciunt dolores aperiam, minus totam sit placeat ratione
      atque culpa expedita aspernatur distinctio esse ullam quod aliquam dolor
      iure ea? Unde consequuntur perspiciatis, sed aperiam perferendis nostrum,
      quae eum, consequatur similique deleniti quam repellendus vitae amet
      molestias. Vitae dolorum quia laborum ipsum accusantium assumenda nobis?
    </motion.div>
  );
};

export default About;
