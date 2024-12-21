import Modal from "@/components/UI/primitives/Modal/Modal";
import { ModalProvider } from "../context/ModalContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

interface IPropsProviders {
    children: React.ReactNode,
}

const Providers = ({children}: IPropsProviders) => {
    return (
        <AntdRegistry>
            <ConfigProvider
                theme={{
                        token: {
                            fontFamily: "var(--font-inter)",
                            colorBgContainer: "#1D1D1D",
                            colorText: "#FCFCFC",
                            colorBgElevated: "#1D1D1D"
                        },
                        components: {
                            Table: {
                                headerBg: "#131313",
                                headerSplitColor: "#131313",
                                cellPaddingInline: 24,
                                cellPaddingBlock: 0,
                                headerColor: "#93949A"
                            },
                            Message: {
                                contentBg: "#131313",
                                zIndexPopupBase: 20000,
                                zIndexPopup: 20000,
                                zIndexBase: 20000
                            },
                        }
                    }
                }
            >
                <ModalProvider>
                    {children}
                    <Modal />
                </ModalProvider>
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default Providers;