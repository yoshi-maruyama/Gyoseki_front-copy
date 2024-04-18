import classes from "@/components/hero/hero.module.scss";

export default function Hero() {
  return (
    <div className={classes.item_hero}>
      <div className={classes.logo}>Logo Gyoseki</div>
      <div>
        <h2 className={classes.title}>Take control of your financial research.</h2>
        <div className={classes.caption}>
          Sign in to Gyoseki to take your research to the next level through the use of our unique
          tool
        </div>
      </div>
    </div>
  );
}
