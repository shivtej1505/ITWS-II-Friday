procs=`ps -ef | awk 'BEGIN {print "<table>"} {print "<tr><td>"$1"</td>", "<td>"$2"</td>", "<td>"$NF"</td></tr>"} END {print "</table>"}'`

echo $procs > procs.html

scp procs.html shivang.nagaria@web.iiit.ac.in:~/public_html/itws


