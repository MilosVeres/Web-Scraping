#Extract links
a<-html_nodes(ppage,'h3 a')
links<-html_attr(a,'href')
links<-links[-c(18,23)]

#-----------------------------------------
links<-str_replace(links,'^(/node/\\d+)','https://www.mercyhurst.edu\\1')
