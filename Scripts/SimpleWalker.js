var Player : GameObject;

var speed = 10.0;
var rotationSpeed = 100.0;

function Update () 
{   
    if (Input.GetButtonDown ("Jump"))
    {
        Player.GetComponent.<Animation>().Play ("jump", AnimationPlayMode.Stop);
    }
        
    if (Input.GetButton("Vertical"))
    {
        Player.GetComponent.<Animation>().Stop ("rest");
        Player.GetComponent.<Animation>().Play ("walk", AnimationPlayMode.Queue);
    }
        
    if (Input.GetButton("Horizontal"))
    {
        Player.GetComponent.<Animation>().Stop ("rest");
        Player.GetComponent.<Animation>().Play ("walk", AnimationPlayMode.Queue);
    }
    
    if (Input.anyKey){}
    
    else
    { 
        Player.GetComponent.<Animation>().Stop ("walk");
        Player.GetComponent.<Animation>().Play ("rest", AnimationPlayMode.Queue);          
    }
}

