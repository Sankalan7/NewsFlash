import React from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Business from "../pages/CategoriesPages/Business";
import Entertainment from "../pages/CategoriesPages/Entertainment";
import General from "../pages/CategoriesPages/General";
import Health from "../pages/CategoriesPages/Health";
import Science from "../pages/CategoriesPages/Science";
import Sports from "../pages/CategoriesPages/Sports";
import Technology from "../pages/CategoriesPages/Technology";
import Latest from "../pages/Latest";
import Trending from "../pages/Trending";
import Headlines from "../pages/Headlines";
import Tools from "../pages/Tools";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Country_ae from "../pages/HeadlinesPages/Country_ae";
import Country_ar from "../pages/HeadlinesPages/Country_ar";
import Country_at from "../pages/HeadlinesPages/Country_at";
import Country_au from "../pages/HeadlinesPages/Country_au";
import Country_be from "../pages/HeadlinesPages/Country_be";
import Country_bg from "../pages/HeadlinesPages/Country_bg";
import Country_br from "../pages/HeadlinesPages/Country_br";
import Country_ca from "../pages/HeadlinesPages/Country_ca";
import Country_ch from "../pages/HeadlinesPages/Country_ch";
import Country_cn from "../pages/HeadlinesPages/Country_cn";
import Country_co from "../pages/HeadlinesPages/Country_co";
import Country_cu from "../pages/HeadlinesPages/Country_cu";
import Country_cz from "../pages/HeadlinesPages/Country_cz";
import Country_de from "../pages/HeadlinesPages/Country_de";
import Country_eg from "../pages/HeadlinesPages/Country_eg";
import Country_fr from "../pages/HeadlinesPages/Country_fr";
import Country_gb from "../pages/HeadlinesPages/Country_gb";
import Country_gr from "../pages/HeadlinesPages/Country_gr";
import Country_hk from "../pages/HeadlinesPages/Country_hk";
import Country_hu from "../pages/HeadlinesPages/Country_hu";
import Country_id from "../pages/HeadlinesPages/Country_id";
import Country_ie from "../pages/HeadlinesPages/Country_ie";
import Country_il from "../pages/HeadlinesPages/Country_il";
import Country_in from "../pages/HeadlinesPages/Country_in";
import Country_it from "../pages/HeadlinesPages/Country_it";
import Country_jp from "../pages/HeadlinesPages/Country_jp";
import Country_kr from "../pages/HeadlinesPages/Country_kr";
import Country_lt from "../pages/HeadlinesPages/Country_lt";
import Country_lv from "../pages/HeadlinesPages/Country_lv";
import Country_ma from "../pages/HeadlinesPages/Country_ma";
import Country_mx from "../pages/HeadlinesPages/Country_mx";
import Country_my from "../pages/HeadlinesPages/Country_my";
import Country_ng from "../pages/HeadlinesPages/Country_ng";
import Country_nl from "../pages/HeadlinesPages/Country_nl";
import Country_no from "../pages/HeadlinesPages/Country_no";
import Country_nz from "../pages/HeadlinesPages/Country_nz";
import Country_ph from "../pages/HeadlinesPages/Country_ph";
import Country_pl from "../pages/HeadlinesPages/Country_pl";
import Country_pt from "../pages/HeadlinesPages/Country_pt";
import Country_ro from "../pages/HeadlinesPages/Country_ro";
import Country_rs from "../pages/HeadlinesPages/Country_rs";
import Country_ru from "../pages/HeadlinesPages/Country_ru";
import Country_sa from "../pages/HeadlinesPages/Country_sa";
import Country_se from "../pages/HeadlinesPages/Country_se";
import Country_sg from "../pages/HeadlinesPages/Country_sg";
import Country_si from "../pages/HeadlinesPages/Country_si";
import Country_sk from "../pages/HeadlinesPages/Country_sk";
import Country_th from "../pages/HeadlinesPages/Country_th";
import Country_tr from "../pages/HeadlinesPages/Country_tr";
import Country_tw from "../pages/HeadlinesPages/Country_tw";
import Country_ua from "../pages/HeadlinesPages/Country_ua";
import Country_us from "../pages/HeadlinesPages/Country_us";
import Country_ve from "../pages/HeadlinesPages/Country_ve";
import Country_za from "../pages/HeadlinesPages/Country_za";

import Sources_ABCNews from "../pages/HeadlinesPages/Sources_ABCNews";
import Sources_BBCNews from "../pages/HeadlinesPages/Sources_BBCNews";
import Sources_BleacherReport from "../pages/HeadlinesPages/Sources_BleacherReport";
import Sources_Bloomberg from "../pages/HeadlinesPages/Sources_Bloomberg";
import Sources_BusinessInsider from "../pages/HeadlinesPages/Sources_BusinessInsider";
import Sources_Buzzfeed from "../pages/HeadlinesPages/Sources_Buzzfeed";
import Sources_CBSNews from "../pages/HeadlinesPages/Sources_CBSNews";
import Sources_CNN from "../pages/HeadlinesPages/Sources_CNN";
import Sources_CricInfo from "../pages/HeadlinesPages/Sources_CricInfo";
import Sources_CryptoCoinsNews from "../pages/HeadlinesPages/Sources_CryptoCoinsNews";
import Sources_ElMundo from "../pages/HeadlinesPages/Sources_ElMundo";
import Sources_EntertainmentWeekly from "../pages/HeadlinesPages/Sources_EntertainmentWeekly";
import Sources_ESPN from "../pages/HeadlinesPages/Sources_ESPN";
import Sources_FourFourTwo from "../pages/HeadlinesPages/Sources_FourFourTwo";
import Sources_FoxNews from "../pages/HeadlinesPages/Sources_FoxNews";
import Sources_FoxSports from "../pages/HeadlinesPages/Sources_FoxSports";
import Sources_GoogleNews from "../pages/HeadlinesPages/Sources_GoogleNews";
import Sources_LEquipe from "../pages/HeadlinesPages/Sources_LEquipe";
import Sources_Marca from "../pages/HeadlinesPages/Sources_Marca";
import Sources_MTVNews from "../pages/HeadlinesPages/Sources_MTVNews";
import Sources_NationalGeographic from "../pages/HeadlinesPages/Sources_NationalGeographic";
import Sources_NBCNews from "../pages/HeadlinesPages/Sources_NBCNews";
import Sources_News24 from "../pages/HeadlinesPages/Sources_News24";
import Sources_NewScientist from "../pages/HeadlinesPages/Sources_NewScientist";
import Sources_Reddit_r_all from "../pages/HeadlinesPages/Sources_Reddit_r_all";
import Sources_Reuters from "../pages/HeadlinesPages/Sources_Reuters";
import Sources_TalkSport from "../pages/HeadlinesPages/Sources_TalkSport";
import Sources_TechCrunch from "../pages/HeadlinesPages/Sources_TechCrunch";
import Sources_TheHindu from "../pages/HeadlinesPages/Sources_TheHindu";
import Sources_TheLadBible from "../pages/HeadlinesPages/Sources_TheLadBible";
import Sources_TheTimesOfIndia from "../pages/HeadlinesPages/Sources_TheTimesOfIndia";
import Sources_TheVerge from "../pages/HeadlinesPages/Sources_TheVerge";
import Sources_TheWallStreet from "../pages/HeadlinesPages/Sources_TheWallStreet";
import Sources_Wired from "../pages/HeadlinesPages/Sources_Wired";
import SourceNews from "../pages/VoiceSearchPages/SourceNews";
import ItemNews from "../pages/VoiceSearchPages/ItemNews";
import CategoryNews from "../pages/VoiceSearchPages/CategoryNews";
import ForYou from "../pages/ForYou";
import Forum from "../pages/Forum";
import Blog from "../pages/Blog";
import PostDetails from "../pages/PostDetails";
import UpdateBlog from "../pages/UpdateBlog";
import UserSettings from "../pages/UserSettings";
import UserBlogs from "../pages/UserBlogs";
import Preferences from "../pages/Preferences";
import TermsAndConditions from "../pages/TermsAndConditions";
import Translation from "../pages/ToolsPages/Translation";
import Horoscope from "../pages/ToolsPages/Horoscope";
import Movies from "../pages/ToolsPages/Movies";
import Cricket from "../pages/ToolsPages/Cricket";
import Football from "../pages/ToolsPages/Football";
import EPL from "../pages/ToolsPages/FootballPages/EPL";
import LaLiga from "../pages/ToolsPages/FootballPages/LaLiga";
import SerieA from "../pages/ToolsPages/FootballPages/SerieA";
import Bundesliga from "../pages/ToolsPages/FootballPages/Bundesliga";
import Ligue1 from "../pages/ToolsPages/FootballPages/Ligue1";
import Currency from "../pages/ToolsPages/Currency";
import Calculator from "../pages/ToolsPages/Calculator";
import Stock from "../pages/ToolsPages/Stock";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/for-you" element={<ForYou />}></Route>
      <Route path="/latest" element={<Latest />}></Route>
      <Route path="/trending" element={<Trending />}></Route>

      <Route path="/headlines" element={<Headlines />}></Route>
      <Route path="/headlines/country-ae" element={<Country_ae />}></Route>
      <Route path="/headlines/country-ar" element={<Country_ar />}></Route>
      <Route path="/headlines/country-at" element={<Country_at />}></Route>
      <Route path="/headlines/country-au" element={<Country_au />}></Route>
      <Route path="/headlines/country-be" element={<Country_be />}></Route>
      <Route path="/headlines/country-bg" element={<Country_bg />}></Route>
      <Route path="/headlines/country-br" element={<Country_br />}></Route>
      <Route path="/headlines/country-ca" element={<Country_ca />}></Route>
      <Route path="/headlines/country-ch" element={<Country_ch />}></Route>
      <Route path="/headlines/country-cn" element={<Country_cn />}></Route>
      <Route path="/headlines/country-co" element={<Country_co />}></Route>
      <Route path="/headlines/country-cu" element={<Country_cu />}></Route>
      <Route path="/headlines/country-cz" element={<Country_cz />}></Route>
      <Route path="/headlines/country-de" element={<Country_de />}></Route>
      <Route path="/headlines/country-eg" element={<Country_eg />}></Route>
      <Route path="/headlines/country-fr" element={<Country_fr />}></Route>
      <Route path="/headlines/country-gb" element={<Country_gb />}></Route>
      <Route path="/headlines/country-gr" element={<Country_gr />}></Route>
      <Route path="/headlines/country-hk" element={<Country_hk />}></Route>
      <Route path="/headlines/country-hu" element={<Country_hu />}></Route>
      <Route path="/headlines/country-id" element={<Country_id />}></Route>
      <Route path="/headlines/country-ie" element={<Country_ie />}></Route>
      <Route path="/headlines/country-il" element={<Country_il />}></Route>
      <Route path="/headlines/country-in" element={<Country_in />}></Route>
      <Route path="/headlines/country-it" element={<Country_it />}></Route>
      <Route path="/headlines/country-jp" element={<Country_jp />}></Route>
      <Route path="/headlines/country-kr" element={<Country_kr />}></Route>
      <Route path="/headlines/country-lt" element={<Country_lt />}></Route>
      <Route path="/headlines/country-lv" element={<Country_lv />}></Route>
      <Route path="/headlines/country-ma" element={<Country_ma />}></Route>
      <Route path="/headlines/country-mx" element={<Country_mx />}></Route>
      <Route path="/headlines/country-my" element={<Country_my />}></Route>
      <Route path="/headlines/country-ng" element={<Country_ng />}></Route>
      <Route path="/headlines/country-nl" element={<Country_nl />}></Route>
      <Route path="/headlines/country-no" element={<Country_no />}></Route>
      <Route path="/headlines/country-nz" element={<Country_nz />}></Route>
      <Route path="/headlines/country-ph" element={<Country_ph />}></Route>
      <Route path="/headlines/country-pl" element={<Country_pl />}></Route>
      <Route path="/headlines/country-pt" element={<Country_pt />}></Route>
      <Route path="/headlines/country-ro" element={<Country_ro />}></Route>
      <Route path="/headlines/country-rs" element={<Country_rs />}></Route>
      <Route path="/headlines/country-ru" element={<Country_ru />}></Route>
      <Route path="/headlines/country-sa" element={<Country_sa />}></Route>
      <Route path="/headlines/country-se" element={<Country_se />}></Route>
      <Route path="/headlines/country-sg" element={<Country_sg />}></Route>
      <Route path="/headlines/country-si" element={<Country_si />}></Route>
      <Route path="/headlines/country-sk" element={<Country_sk />}></Route>
      <Route path="/headlines/country-th" element={<Country_th />}></Route>
      <Route path="/headlines/country-tr" element={<Country_tr />}></Route>
      <Route path="/headlines/country-tw" element={<Country_tw />}></Route>
      <Route path="/headlines/country-ua" element={<Country_ua />}></Route>
      <Route path="/headlines/country-us" element={<Country_us />}></Route>
      <Route path="/headlines/country-ve" element={<Country_ve />}></Route>
      <Route path="/headlines/country-za" element={<Country_za />}></Route>

      <Route
        path="/headlines/sources-abc-news"
        element={<Sources_ABCNews />}
      ></Route>
      <Route
        path="/headlines/sources-bbc-news"
        element={<Sources_BBCNews />}
      ></Route>
      <Route
        path="/headlines/sources-bleacher-report"
        element={<Sources_BleacherReport />}
      ></Route>
      <Route
        path="/headlines/sources-bloomberg"
        element={<Sources_Bloomberg />}
      ></Route>
      <Route
        path="/headlines/sources-business-insider"
        element={<Sources_BusinessInsider />}
      ></Route>
      <Route
        path="/headlines/sources-buzzfeed"
        element={<Sources_Buzzfeed />}
      ></Route>
      <Route
        path="/headlines/sources-cbs-news"
        element={<Sources_CBSNews />}
      ></Route>
      <Route path="/headlines/sources-cnn" element={<Sources_CNN />}></Route>
      <Route
        path="/headlines/sources-cric-info"
        element={<Sources_CricInfo />}
      ></Route>
      <Route
        path="/headlines/sources-crypto-coins-news"
        element={<Sources_CryptoCoinsNews />}
      ></Route>
      <Route
        path="/headlines/sources-el-mundo"
        element={<Sources_ElMundo />}
      ></Route>
      <Route
        path="/headlines/sources-entertainment-weekly"
        element={<Sources_EntertainmentWeekly />}
      ></Route>
      <Route path="/headlines/sources-espn" element={<Sources_ESPN />}></Route>
      <Route
        path="/headlines/sources-sources-four-four-two"
        element={<Sources_FourFourTwo />}
      ></Route>
      <Route
        path="/headlines/sources-fox-news"
        element={<Sources_FoxNews />}
      ></Route>
      <Route
        path="/headlines/sources-fox-sports"
        element={<Sources_FoxSports />}
      ></Route>
      <Route
        path="/headlines/sources-google-news"
        element={<Sources_GoogleNews />}
      ></Route>
      <Route
        path="/headlines/sources-lequipe"
        element={<Sources_LEquipe />}
      ></Route>
      <Route
        path="/headlines/sources-marca"
        element={<Sources_Marca />}
      ></Route>
      <Route
        path="/headlines/sources-mtv-news"
        element={<Sources_MTVNews />}
      ></Route>
      <Route
        path="/headlines/sources-national-geographic"
        element={<Sources_NationalGeographic />}
      ></Route>
      <Route
        path="/headlines/sources-nbc-news"
        element={<Sources_NBCNews />}
      ></Route>
      <Route
        path="/headlines/sources-news24"
        element={<Sources_News24 />}
      ></Route>
      <Route
        path="/headlines/sources-new-scientist"
        element={<Sources_NewScientist />}
      ></Route>
      <Route
        path="/headlines/sources-reddit-r-all"
        element={<Sources_Reddit_r_all />}
      ></Route>
      <Route
        path="/headlines/sources-reuters"
        element={<Sources_Reuters />}
      ></Route>
      <Route
        path="/headlines/sources-talksport"
        element={<Sources_TalkSport />}
      ></Route>
      <Route
        path="/headlines/sources-techcrunch"
        element={<Sources_TechCrunch />}
      ></Route>
      <Route
        path="/headlines/sources-the-hindu"
        element={<Sources_TheHindu />}
      ></Route>
      <Route
        path="/headlines/sources-the-lad-bible"
        element={<Sources_TheLadBible />}
      ></Route>
      <Route
        path="/headlines/sources-the-times-of-india"
        element={<Sources_TheTimesOfIndia />}
      ></Route>
      <Route
        path="/headlines/sources-the-verge"
        element={<Sources_TheVerge />}
      ></Route>
      <Route
        path="/headlines/sources-the-wall-street-journal"
        element={<Sources_TheWallStreet />}
      ></Route>
      <Route
        path="/headlines/sources-wired"
        element={<Sources_Wired />}
      ></Route>

      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/categories/business" element={<Business />}></Route>
      <Route
        path="/categories/entertainment"
        element={<Entertainment />}
      ></Route>
      <Route path="/categories/general" element={<General />}></Route>
      <Route path="/categories/health" element={<Health />}></Route>
      <Route path="/categories/science" element={<Science />}></Route>
      <Route path="/categories/sports" element={<Sports />}></Route>
      <Route path="/categories/technology" element={<Technology />}></Route>

      <Route path="/voice-search/source" element={<SourceNews />}></Route>
      <Route path="/voice-search/item" element={<ItemNews />}></Route>
      <Route path="/voice-search/category" element={<CategoryNews />}></Route>
      <Route path="/voice-search/latest" element={<CategoryNews />}></Route>

      <Route path="/tools" element={<Tools />}></Route>
      <Route path="/tools/translation" element={<Translation />}></Route>
      <Route path="/tools/horoscope" element={<Horoscope />}></Route>
      <Route path="/tools/movies" element={<Movies />}></Route>
      <Route path="/tools/cricket" element={<Cricket />}></Route>
      <Route path="/tools/football" element={<Football />}></Route>
      <Route path="/tools/epl" element={<EPL />}></Route>
      <Route path="/tools/laliga" element={<LaLiga />}></Route>
      <Route path="/tools/serie-a" element={<SerieA />}></Route>
      <Route path="/tools/bundesliga" element={<Bundesliga />}></Route>
      <Route path="/tools/ligue1" element={<Ligue1 />}></Route>
      <Route path="/tools/currency" element={<Currency />}></Route>
      <Route path="/tools/calculator" element={<Calculator />}></Route>
      <Route path="/tools/stock" element={<Stock />}></Route>

      <Route path="/forum" element={<Forum />}></Route>
      <Route path="/new-post" element={<Blog />}></Route>
      <Route path="/update-post/:id" element={<UpdateBlog />}></Route>
      <Route path="/posts/:userId/:postId" element={<PostDetails />}></Route>

      <Route path="/user-settings" element={<UserSettings />}></Route>
      <Route path="/user-blogs" element={<UserBlogs />}></Route>
      <Route path="/preferences" element={<Preferences />}></Route>
      <Route
        path="/terms-and-conditions"
        element={<TermsAndConditions />}
      ></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/about" element={<About />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
    </Routes>
  );
};

export default AllRoutes;
