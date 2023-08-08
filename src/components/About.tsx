import styles from "./About.module.scss";

export function About() {
  return (
    <div>
      <h2 className={styles.aboutTitle}>Bbeauty</h2>

      <div className={styles.container}>
        <div className={styles.paragraph}>
          Welcome to our cosmetics business card showcase! Step into a world of
          stunning and captivating designs tailored exclusively for the
          cosmetics industry. Whether you're a makeup artist, hairstylist,
          beauty salon owner, or skincare specialist, our collection offers a
          diverse range of business cards that exude elegance and
          professionalism.
        </div>
        <div className={styles.paragraph}>
          Using Our Website: We've built our website using the latest
          technologies, combining React, TypeScript, and React Bootstrap to
          offer a seamless user experience. Here's a guide on how to use our
          website to create your perfect beauty business card:
        </div>
        <div className={styles.paragraph}>
          1. We offer to register / Log In: To get started, register for an
          account on our platform or log in if you already have one. This will
          give you access to all the design features and templates.
        </div>
        <div className={styles.paragraph}>
          2. Browse through our diverse collection of beauty-themed business
          card templates. Select the one that best aligns with your demands.
        </div>
        <div className={styles.paragraph}>
          3.You can contact the business or just look and get inspired.
        </div>

        <div className={styles.paragraph}>
          4. If you are a business owner you can add your business to the system
          so other users can get inspired to go and reach your business.
        </div>
        <div className={styles.paragraph}>
          5. When you get to the home page you can make changes in your cards,
          add to your favorites, delete and more all depends on your
          authorization as registered user.
        </div>
        <div className={styles.paragraph}>
          6. If you are intrested you can click on the sun icon on the top right
          and change the app to be on dark mode.
        </div>
      </div>
    </div>
  );
}
