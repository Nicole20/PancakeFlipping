#pragma strict

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
