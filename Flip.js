#pragma strict

var jump = 10;

function Start ()
{

}

function Update ()
{
	if(transform.position.y > 6)
	{
		animation.Play();
	}
	else
	{
		animation.Stop();
	}
}

function OnMouseDown ()
{
	rigidbody.velocity.y = jump;
}
