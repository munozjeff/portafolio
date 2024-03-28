import React from 'react';
import './style.css';

const emojis = ["/assets/bootstrap.png", 
                "/assets/css3.png", 
                "/assets/git.png", 
                "/assets/github.png", 
                "/assets/html.png", 
                "/assets/react.png", 
                "/assets/javascript.png", 
                "/assets/vscode.png"];

                const generateRandomPosition = () => {
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const elementWidth = 50; // Ancho estimado del elemento en píxeles
                    const elementHeight = 50; // Alto estimado del elemento en píxeles
                  
                    const left = Math.random() * (windowWidth - elementWidth);
                    const top = Math.random() * (windowHeight - elementHeight);
                  
                    return {
                      left: `${left}px`,
                      top: `${top}px`,
                    };
                  };
                  
                  const FloatingEmojis = () => {
                    return (
                      <div className="container-float">
                        {emojis.map((img, index) => (
                          <div key={index} className="emoji" style={{ animationDelay: `${index}s`, ...generateRandomPosition() }}>
                            <figure style={{ margin: "0", padding: "0" }}>
                              <img style={{ margin: "0", padding: "0", width: "30px", height: "auto" }} src={img} alt="" />
                            </figure>
                          </div>
                        ))}
                      </div>
                    );
                  };


export {FloatingEmojis};
