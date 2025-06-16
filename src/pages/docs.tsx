import { Button } from "@heroui/button";
import {
  Autocomplete,
  AutocompleteItem,
  DatePicker,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  useDisclosure,
} from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import { IconoPrueba } from "@/recursos/Iconografia";
import React from "react";

export const companions = [
  {
    label: "Laura",
    key: "laura",
    description: "Apasionada y siempre dispuesta a ayudar",
  },
  { label: "Nico", key: "nico", description: "Creativo y con grandes ideas" },
  { label: "Julian", key: "julian", description: "El estratega del grupo" },
  {
    label: "Jhony",
    key: "jhony",
    description: "Siempre aporta energía y buen humor",
  },
  {
    label: "Paula",
    key: "paula",
    description: "Resuelve problemas con inteligencia y paciencia",
  },
  {
    label: "Patricia",
    key: "patricia",
    description: "Líder con gran capacidad de organización",
  },
  {
    label: "Angie",
    key: "angie",
    description: "Carismática y con un don para la comunicación",
  },
  {
    label: "Gladis",
    key: "gladis",
    description: "Firme y determinada en cada desafío",
  },
  {
    label: "Isabela",
    key: "isabela",
    description: "Innovadora y siempre llena de ideas",
  },
  {
    label: "Josbel",
    key: "josbel",
    description: "Gran compañero en cualquier proyecto",
  },
  {
    label: "Jhonny",
    key: "jhonny",
    description: "Analítico y con gran capacidad de resolución",
  },
  {
    label: "Mauricio",
    key: "mauricio",
    description: "Empático y buen consejero",
  },
];
const DocsPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = React.useState<
    "left" | "right" | "top" | "bottom"
  >("left");

  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  const placementLabels: Record<typeof placement, string> = {
    left: "izquierda",
    right: "derecha",
    top: "arriba",
    bottom: "abajo",
  };

  return (
    <DefaultLayout>
      <div
        style={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}
      >
        <Button color="primary" style={{ marginBottom: "1rem" }}>
          Enviar a Nico
          <IconoPrueba />
        </Button>
        <DatePicker className="max-w-[284px]" label="Fecha nacimiento" />
        <Input
          className="max-w-[284px]"
          label="Correo electrónico"
          type="email"
          width={50}
        />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Autocomplete className="max-w-xs" label="Ascender compañero">
            {companions.map((companions) => (
              <AutocompleteItem key={companions.key}>
                {companions.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          <Autocomplete
            scrollShadowProps={{ isEnabled: false }}
            className="max-w-xs"
            defaultItems={companions}
            label="Compañero favorito"
            listboxProps={{
              className: "max-h-[200px] overflow-auto",
            }}
            placeholder="Cual es tu compañero favorito?"
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex flex-wrap gap-3">
          {(["left", "right", "top", "bottom"] as const).map((placement) => (
            <Button
              key={placement}
              className="capitalize"
              onPress={() => handleOpen(placement)}
            >
              Abrir {placementLabels[placement]}
            </Button>
          ))}
        </div>
        <Drawer
          isOpen={isOpen}
          placement={placement}
          onOpenChange={onOpenChange}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  Drawer Title
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Aplicar Filtro
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </DefaultLayout>
  );
};

export default DocsPage;
