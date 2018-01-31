#FS - Input field separator
#NF - Number of fields
#OFS - output field separator
#NR - Number of records

BEGIN{
    print "File\tOwner";
    FS=","
}
{
      print $NR
      rec_data[$1] = $3+$4+$5;
}
END{
    print sum,mcount;
    print rec_data["AA"];
}
