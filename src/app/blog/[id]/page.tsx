import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";

export default function BlogDetailPage() {
    return (
        <div>
            <div className="mb-8">
                <BackButton />
                <h2 className="text-2xl font-bold my-4">Post One</h2>
                <ButtonAction />
            </div>
            <p className="text-slate-700">Post one content</p>
        </div>
    )
}
