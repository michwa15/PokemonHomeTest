import React from "react";

const colors = ["pink","green","blue","brown", "gold", "AntiqueWhite", "CornflowerBlue", "Cyan", "DarkCyan", "DarkOrchid", "DarkOrange", "DarkSeaGreen", "GoldenRod", "IndianRed", "Khaki", "LightBlue", "LightGreen", "LightSlateGrey", "LimeGreen", "MediumTurquoise", "Olive", "Orange", "Plum", "RosyBrown", "SandyBrown", "SlateGrey", "Tan", "Tomato"];

const PokemonInfo = ({ title, content, infoType }) => {
    
    let randomIndexColor = Math.floor(Math.random() * 28);
    const randomColor1 = colors[randomIndexColor];
    randomIndexColor = Math.floor(Math.random() * 28);
    const randomColor2 = colors[randomIndexColor];

    return (
    <div>
      <h2 className="list-info-title">{title}</h2>
      <ul className="list-info-details">
        {content.map((item, index) => {
           return <li 
                    key={item[infoType].name} 
                    className="pokemon-attribute" 
                    style={{background: "linear-gradient(" + randomColor1+ "," + randomColor2 + ")"}}
                  >
                    {item[infoType].name}
                  </li>
        })}
      </ul>
    </div>
  );
};

export default PokemonInfo;
