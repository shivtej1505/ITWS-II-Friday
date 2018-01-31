BEGIN{
    print "File\tOwner";
    sum=0;
    mcount=0;
}
{
    for(i=1;i<=5;i++)
       {
	   printf "%d ",$3*i;
       }
    print $3;
    sum+=$3;    
}
END{
    print sum,mcount;
}
