<?xml version="1.0" encoding="iso-8859-1"?>  
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">  
  
<xsl:template match="/">  
<html>  
<head>  
    <title>Review of My Dogs</title>  
</head>  
<body>  
    <h4>list of My Dogs</h4>  
      
    <table width="100%" border="1">  
        <thead>  
            <tr>  
            <th>Name</th>  
            <th>Breed</th>  
            <th>Age</th>  
            <th>Full Blood</th>  
            <th>Color</th>  
            </tr>  
        </thead>  
        <tbody>  
            <xsl:apply-templates/>  
        </tbody>  
    </table>  
</body>  
</html>  
</xsl:template>  
  
<xsl:template match="dog">  
    <tr>  
        <td>  
            <strong><xsl:value-of select="name" /></strong>  
        </td>  
        <td><xsl:value-of select="@breed" /></td>  
        <td><xsl:apply-templates select="age" /></td>  
        <td><xsl:value-of select="fullBlood" /> </td>  
        <td><xsl:value-of select="color" /></td>  
    </tr>  
  
</xsl:template>  
  
<xsl:template match="age">  
    <xsl:value-of select="years" />years  
    <xsl:value-of select="months" />months  
</xsl:template>  
  
</xsl:stylesheet> 