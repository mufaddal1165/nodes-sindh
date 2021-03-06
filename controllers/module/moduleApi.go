package module

import (
	"github.com/gin-gonic/gin"
	"github.com/heroku/go-getting-started/controllers/webSocket"
	"github.com/heroku/go-getting-started/services"
	"net/http"
)

func PostNodeStatus(c *gin.Context) {
	status := c.Param("status")
	node, e := services.UpdateNodeStatus(status)
	if e != nil {
		c.JSON(http.StatusBadRequest, e)
	} else {

		command, e := services.GetCommandForNode((*node).Id)
		if e != nil {
			c.String(http.StatusInternalServerError, command)
		}
		webSocketConnections := webSocket.GetWebSocketConnection()
		if webSocketConnections != nil {
			for _, webSocCon := range webSocketConnections {
				_ = webSocCon.WriteJSON(*node)
			}
		}
		c.String(http.StatusAccepted, command)
	}
}
