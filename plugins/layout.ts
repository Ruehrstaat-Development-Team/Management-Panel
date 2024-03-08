export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    var device = useDevice();
    const nav = navigation();
    const router = useRouter();
    var currentRoute = router.currentRoute;
    var currentRouteLayout = computed(() => {
      return (
        nav.Destinations.find((d: any) => d.Path === currentRoute.value.path)
          ?.Layout
      );
    });
    if(device.isMobile){
      //@ts-expect-error
      setPageLayout("mobile-" + currentRouteLayout.value);
    }
    else{
      //@ts-expect-error
      setPageLayout("desktop-" + currentRouteLayout.value);
    }
  });
});