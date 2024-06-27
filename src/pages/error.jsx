export default function ErrorPage() {                                                     
  const spanText = `Oups! La page que \n vous demandez n'existe pas.`;    
  return (                                                                
    <div>
      <h1>404</h1>                                                        
      <span>{spanText}</span>                                            
    </div>
  );
};