function isTouching(funObject1,funObject2)
{
  if(funObject1.x-funObject2.x < funObject1.width/2+funObject2.width/2
    &&funObject2.x-funObject1.x < funObject1.width/2+funObject2.width/2
    &&funObject1.y-funObject2.y < funObject1.width/2+funObject2.width/2
    &&funObject2.y-funObject1.y < funObject1.width/2+funObject2.width/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}