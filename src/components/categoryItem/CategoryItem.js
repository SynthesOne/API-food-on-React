function CategroyItem(props) {
  let { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className="card">
      <img src={strCategoryThumb} alt={strCategory} />
      <h2>{strCategory}</h2>
      <p>{strCategoryDescription}</p> 

      <div className="card-action">
        <a href="#">Watch category</a>    
      </div> 
    </div>
  );
}

export default CategroyItem;
