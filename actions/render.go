package actions

import (
	// "blog/public"
	// "blog/templates"
	"html/template"
	"os"

	"github.com/gobuffalo/buffalo/render"
)

var r *render.Engine

func init() {
	r = render.New(render.Options{
		HTMLLayout:       "application.html",
		JavaScriptLayout: "",
		TemplatesFS:      os.DirFS("templates"),
		AssetsFS:         os.DirFS("public/assets"),
		Helpers: render.Helpers{"csrf": func() template.HTML {
			return template.HTML("<input name=\"authenticity_token\" value=\"<%= authenticity_token %>\" type=\"hidden\">")
		}},
		TemplateEngines:    map[string]render.TemplateEngine{},
		DefaultContentType: "",
	})
}
