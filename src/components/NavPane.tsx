import { type JSX } from 'react';
import { useAuthStore } from '../store/useAuthStore';



const NavPane = (): JSX.Element => {
    const user = useAuthStore((state) => state.user);

    return (
        <div style={styles.pane}>
            <div style={styles.title}>Navigation Left Pane</div>
            {/* {user && ( */}
                <div style={styles.item}>
                    Welcome, {user && user.username ?  user?.username : "No login" }!
                </div>
            {/* )} */}
        </div>
    );
}




const styles: Record<string, React.CSSProperties> = {
    pane: {
        width: '250px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
        height: '100%',
        overflowY: 'auto',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    item: {
        padding: '8px 12px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default NavPane;