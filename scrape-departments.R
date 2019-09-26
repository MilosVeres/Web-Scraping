for(i in 1:30){
  url<-links[i]
  request<-GET(url)
  page<-content(request,'text')
  fileName<-paste(departments[i],'.html',sep='')
  write(page,fileName)
}

