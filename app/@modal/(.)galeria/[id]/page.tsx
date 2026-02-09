import { Suspense } from "react";
import { Modal } from "./modal";
import { Gallery } from "./gallery";

export default async function GaleriaModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    return (
        <Modal>
            <Suspense>
                <Gallery params={params} />
            </Suspense>
        </Modal >
    );
}
