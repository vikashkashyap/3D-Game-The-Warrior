var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;

private var moveDirection = Vector3.zero;
private var grounded : boolean = false;

private var lastPosition = Vector3.zero;
private var thisPosition = Vector3.zero;


private var restRotation = new Quaternion(0,0,0,0);

function FixedUpdate() 
{  
    cameratransform = Camera.main.transform;

	cameraRelativeZ = cameratransform.TransformDirection (Vector3.fwd);
	cameraRelativeZ.y = 0;
	cameraRelativeZ.Normalize ();
	
    if (grounded) 
	{   
	
        thisPosition = transform.position;
        thisPosition.y = 0;
        
        moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));      
        
        transform.rotation = restRotation;
        
        if (lastPosition != thisPosition)
        {
            transform.rotation = Quaternion.LookRotation (cameraRelativeZ, transform.TransformDirection(Vector3.up));
            
            moveDirection = transform.TransformDirection(moveDirection);
            moveDirection *= speed;
        
            restRotation = transform.rotation;
        } 

        if (Input.GetButton ("Jump")) 
		{
			moveDirection.y = jumpSpeed;
		}
					
	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;

	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var totalMove = moveDirection * Time.deltaTime;

	var flags = controller.Move(totalMove);
	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
	
	if (grounded)
	{
	   moveDirection = Vector3.zero;
	}
    
    lastPosition = transform.position;
    lastPosition.y = 0;
}