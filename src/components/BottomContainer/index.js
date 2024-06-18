import ProductItem from "../ProductItem";
import "./index.css";

const BottomContainer = () => (
  <div className="bottam-bg-cont">
    <div className="content-container">
      <div className="about-container">
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638171/Frame_2_hauxeg.png"
          alt="desing"
          className="design-image"
        />
        <p className="about-text">About</p>
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638171/Frame_2_hauxeg.png"
          alt="desing"
          className="design-image"
        />
      </div>
      <div className="about-container">
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718616264/Frame_1_u62zgn.png"
          alt="design"
          className="decoration"
        />
        <p className="about-details-text">
          Our products are crafted exclusively from the dreams and screams of
          young kids who wanted to show their mastery in their chosen fields,
          but were directed towards a factory for daily wages. Each cracker
          bursts brighter than their lost smiles, and can be heard louder than
          their cries for miles. Buy them, burst them, brag about them.
          <br />
          <span className="about-span">
            The choice is yours. Because they don’t have one.
          </span>
        </p>
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718616264/Frame_1_u62zgn.png"
          alt="design"
          className="decoration"
        />
      </div>
      <div className="about-container">
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638171/Frame_2_hauxeg.png"
          alt="desing"
          className="products-design"
        />
        <p className="products-text">Our products</p>
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638171/Frame_2_hauxeg.png"
          alt="desing"
          className="products-design"
        />
      </div>
      <div className="product-container">
        <ProductItem name={"Raju Rassibomb"} />
        <ProductItem name={"Ladiyon ki Rani Chani"} />
      </div>
      <img
        src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718692904/Frame_3_jw5ixw.png"
        className="full-design"
        alt="design"
      />
    </div>
    <div className="footer-container">
      <img
        src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718693436/Frame_64_ww41qw.png"
        alt="footer"
      />
      <div className="footer-main-cont">
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718693598/Frame_62_sdvpqn.png"
          alt="decoration"
        />
        <div className="social-media-cont">
          <h1 className="follow-text">Follow us on</h1>
          <div className="icons-cont">
            <img
              src="https://s3-alpha-sig.figma.com/img/a569/a252/98ad4bac62c5d9f48886f4cc17a7a334?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cm8zkln5hAAwW4ekdfdnsWhEQzcuUAyY9e6Y~Rz4zW6gAicdj01xzOE5010dSRbuzLPbjVMCX9jlQEUQNsUg40SfJjy~iAEeNo9YsYNzB08Ccb1zuXkwiQdaEZR7PpzaMCcDHuKwNuE2Xg3nhMR9VOA3WYvWjUk7FF5XoJ0~BWd6xhXJoQLUWfyJ7rF0HBCmm9p1qG7VE~WVLodSwwuVZW3GbwJ4Zy~5t0uffmdxGariTgMi5zjX-pqUGVwA-2Azb~GKn9trRDDI1v42x17DBepKlG4RErshZMsuWwCxUsXCTiHs1IRVgy0LUFqnx284B36-zQUPBOSlNKfL~gjkFg__"
              alt="Instagram"
              className="icon"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/afff/a78b/0c0a25d9e71be520bb460ddb410bbb7a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M97FaErH24O270IL3wdpsrd0DaJT525o9D3AI8QodVpxgDl6Fh4SY771Oq6eoKy7MtMFtFLwdTJfXdgQqKFik-VR4AnQLwKI49GIZBYWFEkWdE5pfXfCW6Qa9PM3Z9RAW6W~9V7S1AYmGgnYc~LZCEqqy~dg08q~G2duXh0DwLvb7afIk7AEvXEdHp0e9LTo60oFVNk7RLGlNII8bwLJV4ic4GijT43lWW0-zeeGl57EplrKK7GdQvR2rZqqbo2~I~lvqLb9Qi7yG45PyNuojR9z~5rCXhewOukUKI2~NE5W8nR8isdTQP1upfKPiQ8lP84l0Nuh~RW5~wX7wqkzwA__"
              alt="You tube"
              className="icon"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/4c5c/a965/cf3f5538ea0e143e7bb2c01d74a24c88?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6N1DbpSHrQ8OCjxcvcKyUGYiPk232XGPHKcoo9UtK7DpEkVgKVDw36xi9seW~aHSdkXdME1wtboGQTPZJd~n3yHaap6Qt~hpGm40pIIKNv8L-8LXjrgFlvTXi~2-CAwVLJCa9gyHn7O55WqUi22P~oxo28R13R-3Z~qJa-E7svb2BnWJmKi5-HUE6ptrve50VXNuvFt1ZKKNXPHtwFYBhR2m~dXNPLlV7jnIwrkNglMsnb6~mYhcZ30XPU9DYVjxxouJyT-jkY1ggWzD6FLwuwpRW8271oW5pvZEqneXmUyhZ6as7sp~fP4oXr1xeHm7bnOeXIg3K4UQkm~510MuA__"
              alt="Twitter"
              className="icon"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/098b/6848/74eda9afaa6a343c38d1e4e5a7c62078?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AmQx88yPdlGZeneGw1W89tGz2CfaAy0nDBUpex0vsgVNXeiRV3091gYsjjHCinDEaBsvCED4s3yG-~dVuwZYnYseiOle5br4SU89smvyj889MxcFsJ6d5WcTnngIFczc3pXCNve6FdLwZX-dySAfTKBMdqilDkkZie0-6FlvO8Ijk8PIBMEmpu7V7UJ8ZbnBxNSoe5JBOaHY66gRdNFTeu9hw-qlnqc2ATY7DRRVJ2LMgvMe2x8d9Tju7uPOVOfLb6mvbPKY-VeijbCk68O4SQfF0f~gyY81BDdjzkcs5QJnTQ1K9f0vxBh9xSvth3gyt-QM4TpRI~83VQSpzodEig__"
              alt="Facebook"
              className="icon"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/d190/69d0/b2b64a6f5cf2f6897396b3bda7068949?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkgApVboi0o~dvkxVQtg-CWN-Q47zxOeAL507crjglKgCDVmop4YYBy0SsESCNWgICvmQkVznammdyfSJTA6wQhobcQukGUOgN7iMMb8DM-Opb7-JFZhMYNIRueMZjeVPof6dws2rvkWkB-IqVop5mJIBaQHISBxl~k7UvlkpWTC3nzfvfsxf1Z2fqp1yE7YobDr~f8XUmjxTzHIm2EIUc1bCl~CKzXwmnkU5069EpBqaqM5V72-ashlkayS93Zv0toW-UZ1BmHHrezvSIUhFuRs-LoOjl8ZiuOODmFPKU7P18r9yqnLgx5n3namXI8Lb4L1BltyxdqzBAHt9hK~Zw__"
              alt="LinkdIn"
              className="icon"
            />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718693598/Frame_62_sdvpqn.png"
          alt="decoration"
        />
      </div>
      <img
        src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718693436/Frame_64_ww41qw.png"
        alt="footer"
      />
    </div>
  </div>
);
export default BottomContainer;
