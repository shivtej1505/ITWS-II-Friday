BEGIN{
    print "File\tOwner";
    sum=0;
    mcount=0;
}
{
    print $2;
    sum -= $3;
    if($2=="M")
      {
	  mcount++;
      }

      for(i=0;i<5;i++)
	 {
	     print $3*i;
	 }
}
END{
    print sum,mcount;
}
