var lastPosition = Vector3.zero;
var thisPosition = Vector3.zero;



function LateUpdate () 
{
    thisPosition = transform.position;
    thisPosition.y = 0;
    
    if (lastPosition != thisPosition)
    {
        moveRotation = Quaternion.LookRotation (thisPosition - lastPosition, transform.TransformDirection(Vector3.up));
        transform.rotation = Quaternion.Lerp (transform.rotation, moveRotation, 5 * Time.deltaTime);
    }
    
    lastPosition = transform.position;
    lastPosition.y = 0;
}