import { getAuth, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate=useNavigate();
    return (<>
  <h1>Hello, welcome to my blog!</h1>
  <button onClick={()=>{
    navigate('/login');
  }}>LogIn</button>
  <button onClick={()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Out");
        navigate('/login');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }}>Logout</button>
  
  <p>
      Welcome to my blog! Proin congue
      ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
      Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
      non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
      eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
      sodales purus euismod.
  </p>
  <p>
      Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
      Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
      nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
      sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
      interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
      consequat quam. Vivamus accumsan dui in facilisis aliquet.,
  </p>
  <p>
      Etiam nec lectus urna. Sed sodales ultrices dapibus. 
      Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
      nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
      sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
      interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
      consequat quam. Vivamus accumsan dui in facilisis aliquet.,
  </p>
  </>
    )
};

export default HomePage;