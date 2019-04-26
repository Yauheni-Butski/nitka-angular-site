# Photo portfolio site 
This is a test project on Angular 6+. Photo portfolio site that allows you:
- Navigate through tree of categories.
``` 
Level 1 - Categories (Some categories can don't have sections)
Level 2 - Sections
Level 3 - Photos

```
- Navigate via global menu with 'hamburger' icon in the upper right corner.
- Open section's photos in Photo Viewer.
- Navigate through photos in Photo Viewer with mouse scroll wheel or by clicking on photo in bottom bar.
- Set 'Like' to photo in Photo Viewer.
- Contact photographer via special form on Contact page.
- Check special prices on Services page.

For Admin I have a 'back door' which leads to admin dashboard. Just add in address bar '/admin'.
Not authorized people will be redirected to '/login' page.
> Just use username/password - admin/admin... for test purpose, of course ;)

# Run application
1. Get and run server from [THIS](https://github.com/Yauheni-Butski/nitka-web-server/tree/perf-review) (_this is very lightweight server that provide only mock data_)
> The server should automatically start on port :13021. If it is not - set port in properties of application.
2. Run this angular application as:
```
- npm install (for first time)
- ng serve --open
```
> Angular application should automatically start on port :4200. If it is not - set port in 'angular.json' file.
3. Enjoy :)

# Some technical information
In this application I have:
- Basic Angular template functionality.
- Injactable services for making calls to server API via Angular's HttpClient.
- Routes for changing application's pages via Angular's RouterModule.
- Special 'admin-routing.module' with Auth Guard for protecting Admin feature module from unauthorized access.
- HttpInterceptor for Admin feature module which checking JWT for access to '/admin' and redirect to '/login' page if JWT not valid or doesn't exist.
- Implementation of 'Master Page'(Layout) functionality.
- Angular Material controls on Contact page.
- 2 custom attribute directives - 'MouseWheelHzScrollDirective' and 'ContextMenuProtectionDirective'.
```
MouseWheelHzScrollDirective - allow to scroll any container with horizontal scroll using mouse wheel.
ContextMenuProtectionDirective - just simple protection from showing context menu by right mouse button click. Main purpose - don't allow people with low IQ to save photos...
```
