import Like from "./Compnents/Like";
import Unlike from "./Compnents/Unlike";
import LikeUnlikeContainer from "./Compnents/Toggle";
export default function RecipeCard(
  {RecipeName,
  Time,
  Serves,
  Type,
  Difficulty,
  ImgSrc,
  })
  {
    return (
        <div className='recipe-card'>
            <header className='recipe-header'>
            <LikeUnlikeContainer />
            <h2  id="head">{RecipeName}</h2>
            <p className="prep-cook">{Time}</p>
        </header>
        <section className='recipe-body'>
          <div className='phara'>
            <p>{Serves}</p>
            <p>{Type}</p>
            <p>{Difficulty}</p>
          </div>
          <img src={ImgSrc} className="pic" />
        </section>
        <footer className='recipe-footer'>
            <small>© 2025 Usha Star Family Restaurant Inc.</small>
        </footer>
        </div>
    );
}