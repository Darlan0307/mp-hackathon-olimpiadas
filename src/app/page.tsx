import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardTitle>Quantidade de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h2>area de grafico</h2>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardTitle>Quantidade de visitantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h2>area de grafico</h2>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2>area de grafico</h2>
        </div>
      </div>
      <div className="min-h-[50vh] border border-solid border-black">
        <p>grafico de pizza ou rosca</p>
      </div>
    </main>
  );
}
