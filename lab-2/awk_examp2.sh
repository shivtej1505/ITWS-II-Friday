BEGIN{
    print "File\tOwner";
    sum=0;
    mcount=0;
}
{
    print $3;
    sum+=$3;
    if($2=="M")
      {
	  mcount += 1;
      }    
}
END{
    print sum,mcount;
}
