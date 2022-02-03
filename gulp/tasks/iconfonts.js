export const iconfonts = () => {
	return app.gulp.src(app.path.src.iconfonts)
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "ICONFONTS",
			message: "Error: <%= error.message %>"
		}))	
	)
	.pipe(app.gulp.dest(app.path.build.iconfonts))
	.pipe(app.plugins.browsersync.stream())
}