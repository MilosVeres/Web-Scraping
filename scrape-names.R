#Scrape the departments page

url<-'http://www.mercyhurst.edu/academics/undergraduate-programs'
request<-GET(url)
page<-content(request,'text')
write(page,'departments.html')

#---------------------------------------------------------
#Extract the department names

ppage<-read_html('departments.html')
strong<-html_nodes(ppage,'strong')
text<-html_text(strong)
text<-text[-c(18,23)]
#---------------------------------------------------------
#Some data massaging with regular expressions

departments<-str_replace(text,'Department','')
departments<-str_trim(departments)
departments<-str_replace(departments,'&','and')
departments<-str_replace(departments,'/',' and ')
departments<-str_replace_all(departments,'\\W','-')

