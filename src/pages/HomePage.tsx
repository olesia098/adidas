import React from "react";
//@ts-ignore
import home from "../assets/HomePage.svg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//@ts-ignore
import cl from "../assets/bg_cl.svg"

const HomePage = () => {
  return (
    <div>
      <div className="home_up">
        <img src={home} alt="home" style={{ position: "relative" }} />
        <div
          style={{
            position: "absolute",
            top: "61%",
            zIndex: "5",
            left: "22%",
            textAlign: "center",
          }}
          className="flex flex-col w-72"
        >
          <h1 className="mb-10 text-4xl text-zinc-100" style={{ fontWeight: "700" }}>
            
          </h1>
          <a className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">
              <Link to={"/shop"}>Shop</Link>
            </span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </div>
      </div>

      <section className="flex flex-row justify-evenly items-center bg-yellow-100 p-24">
        <div className="sec_home flex flex-col">
          <h2 className="text-2xl font-bold">
            Stories, style, and sporting goods at adidas, since 1949
          </h2>
          <p>
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.
            adidas is home to the runner, the basketball player, the soccer kid,
            the fitness enthusiast, the yogi. And even the weekend hiker looking
            to escape the city. The 3-Stripes are everywhere and anywhere. In
            sports. In music. On life’s stages. Before the whistle blows, during
            the race, and at the finish line. We’re here to support creators. To
            improve their game. To live their lives. And to change the world.
            <br />
            <br />
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sporting goods, style and clothing that match the athletic
            needs, while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>
        <div className="sec_home flex flex-col">
          <h2 className="text-2xl font-bold">Workout clothes, for any sport</h2>
          <p>
            adidas designs for athletes of all kinds. Creators who love to
            change the game. People who challenge conventions, break the rules,
            and define new ones. Then break them all over again. We design
            sports apparel that gets you moving, winning, and living life to the
            fullest. We create bras and tights for female athletes who play just
            as hard as the men. From low to high support. Maximum comfort. We
            design, innovate and iterate. We test new technologies in action. On
            the field, the track, the court, and in the pool. We’re inspired by
            retro workout clothes, creating new streetwear essentials. From NMD
            and Ozweego to our Firebird tracksuits. From Stan Smith to
            Superstar. Classic sports models are brought back to life on the
            streets and the stages around the world.
            <br />
            <br />
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sports apparel too. Our lives are constantly
            changing. Becoming more and more versatile. And adidas designs with
            that in mind.
          </p>
        </div>
      </section>
      {/* <img src={cl} alt="cl" style={{ position: "relative" }} /> */}
      <section className="trd-section flex flex-row justify-around m-10 pt-10 pb-10 max-md:flex-col">
        <div className="card flex flex-col items-center">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_fw23_holiday_dec_shoes100andunder_glp_group_tcc_d_313e735c64.jpg" alt="" />
            <h3 className="font-bold pt-8">ICONIC LAST-MINUTE GIFTS</h3>
            <p>Don’t delay—grab these $100-and-under sneakers to win the season.</p>
            <Button color="secondary"><Link to={"/shop"}>shop now</Link> 
            </Button>
        </div>
        <div className="card flex flex-col items-center">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_fw23_holiday_stocking_stuffers_dec_glp_tcc_d_cfeae80b2c.jpg" alt="" />
            <h3 className="font-bold pt-8">HOLIDAY BUZZER BEATERS</h3>
            <p>Don’t delay—grab these $100-and-under sneakers to win the season.</p>
            <Button color="secondary"><Link to={"/shop"}>shop now</Link></Button>
        </div>
        <div className="card flex flex-col items-center">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og136_fw23_og_reset_sustain_stansmith_tcc_2_d_c17684c8b5.jpg" alt="" />
            <h3 className="font-bold pt-8">FORUM</h3>
            <p>Don’t delay—grab these $100-and-under sneakers to win the season.</p>
            <Button color="secondary"><Link to={"/shop"}>shop now</Link></Button>
        </div>
        <div className="card flex flex-col items-center">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og136_fw23_og_reset_sustain_samba_tcc_d_b15ae595fb.jpg" alt="" />
            <h3 className="font-bold pt-8">SAMBA</h3>
            <p>Don’t delay—grab these $100-and-under sneakers to win the season.</p>
            <Button color="secondary"><Link to={"/shop"}>shop now</Link></Button>
        </div>
   
      </section>
    </div>
  );
};

export default HomePage;
