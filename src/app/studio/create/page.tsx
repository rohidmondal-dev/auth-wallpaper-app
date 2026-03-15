import CreateWallpaperForm from "@/components/Forms/CreateWallpaperForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Wallpaper | Wallpaper App",
  description: "Create Wallpaper page of Wallpaper App",
};

// export const dynamic = "force-dynamic";

const page = async () => {
  
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="py-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Create
          </CardTitle>
        </CardHeader>

        <CreateWallpaperForm  />
      </Card>
    </section>
  );
};

export default page;