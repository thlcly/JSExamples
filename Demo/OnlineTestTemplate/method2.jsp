<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>method2 jsp</title>
</head>
<body>
	<%
		response.setCharacterEncoding("utf-8");
		String source = request.getParameter("source");
		if(source == null){
			out.print("请输入内容");    			
		}else{
			out.print(source);
		}
	%>
</body>
</html>