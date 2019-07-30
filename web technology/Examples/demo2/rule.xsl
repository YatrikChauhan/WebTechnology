<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1 align="center">Student ResultSheet</h1>
				<table border="3" align="center">
					<tr>
						<th>Name</th>
						<th>AJT</th>
						<th>WT</th>
						<th>Dot-Net</th>
						<th>SE</th>
						<th>DCDR</th>
						<th>Total</th>
					</tr>
					<xsl:for-each select="student/s">
					<xsl:sort select="Total" order="descending"></xsl:sort>
					<tr>
						<td><xsl:value-of select="name"></xsl:value-of></td>
						<td><xsl:value-of select="AJT"></xsl:value-of></td>
						<td><xsl:value-of select="WT"></xsl:value-of></td>
						<td><xsl:value-of select="Dot-Net"></xsl:value-of></td>
						<td><xsl:value-of select="SE"></xsl:value-of></td>
						<td><xsl:value-of select="DCDR"></xsl:value-of></td>
						<td><xsl:value-of select="Total"></xsl:value-of></td>
					</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>